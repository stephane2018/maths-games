import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { CE1D_THEMES } from '../data/ce1dThemes.js';

function getBestTheme(categoryBreakdown) {
  const themeAccuracy = {};
  for (const theme of CE1D_THEMES) {
    let correct = 0, total = 0;
    for (const cat of theme.categories) {
      const s = categoryBreakdown[cat];
      if (s) { correct += s.correct; total += s.total; }
    }
    if (total > 0) {
      themeAccuracy[theme.id] = { accuracy: correct / total, icon: theme.icon };
    }
  }
  let best = null, bestAcc = -1;
  for (const [id, data] of Object.entries(themeAccuracy)) {
    if (data.accuracy > bestAcc) { bestAcc = data.accuracy; best = { id, icon: data.icon }; }
  }
  return best;
}

function aggregateLeaderboard(matches, t) {
  const teams = {};
  for (const m of matches) {
    for (const side of ['blue', 'red']) {
      const rawName = side === 'blue' ? m.blueName : m.redName;
      if (!rawName) continue;
      const key = rawName.trim().toLowerCase();
      if (key === 'ai' || !key) continue;

      if (!teams[key]) {
        teams[key] = {
          displayName: rawName,
          gamesPlayed: 0, gamesWon: 0,
          totalCorrect: 0, totalAnswered: 0,
          categoryBreakdown: {},
        };
      }
      const team = teams[key];
      team.gamesPlayed++;
      if (m.winner === side) team.gamesWon++;
      const stats = side === 'blue' ? m.blueStats : m.redStats;
      if (stats) {
        team.totalCorrect += stats.correct || 0;
        team.totalAnswered += stats.total || 0;
        for (const [cat, s] of Object.entries(stats.categoryBreakdown || {})) {
          if (!team.categoryBreakdown[cat]) team.categoryBreakdown[cat] = { correct: 0, total: 0 };
          team.categoryBreakdown[cat].correct += s.correct;
          team.categoryBreakdown[cat].total += s.total;
        }
      }
    }
  }

  return Object.values(teams)
    .map(team => ({
      ...team,
      accuracy: team.totalAnswered > 0 ? Math.round((team.totalCorrect / team.totalAnswered) * 100) : 0,
      points: (team.gamesWon * 100) + (team.totalCorrect * 10) + (team.totalAnswered > 0 ? Math.round((team.totalCorrect / team.totalAnswered) * 50) : 0),
      bestTheme: getBestTheme(team.categoryBreakdown),
    }))
    .sort((a, b) => b.points - a.points);
}

export default function LeaderboardScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const { pop } = useNavigation();

  const matches = storage.getLeaderboard();
  const rankings = aggregateLeaderboard(matches, t);
  const recentMatches = [...matches].reverse().slice(0, 20);

  const rankColors = ['#F59E0B', '#94A3B8', '#B45309'];

  return (
    <div className="screen">
      <div className="top-bar">
        <div className="top-bar-left">
          <button
            className="back-btn"
            onClick={() => { sound.buttonClick(); pop(); }}
            dangerouslySetInnerHTML={{ __html: '&#8592; ' + t('mode.back') }}
          />
        </div>
        <div className="top-bar-right" />
      </div>

      <div className="screen-content stagger-children">
        <h1 className="title">{t('leaderboard.title')}</h1>

        {rankings.length === 0 && (
          <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>{t('leaderboard.noData')}</p>
        )}

        {rankings.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginTop: '4px' }}>{t('leaderboard.teamRankings')}</h2>
            <div className="leaderboard-table-wrap">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t('leaderboard.team')}</th>
                    <th>{t('leaderboard.points')}</th>
                    <th>{t('leaderboard.wins')}</th>
                    <th>{t('leaderboard.accuracy')}</th>
                    <th>{t('leaderboard.bestTheme')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((team, i) => (
                    <tr key={team.displayName}>
                      <td style={{ fontWeight: '900', fontSize: '1.1rem', color: rankColors[i] || 'var(--text)' }}>
                        {i + 1}
                      </td>
                      <td style={{ fontWeight: '800' }}>{team.displayName}</td>
                      <td>{team.points}</td>
                      <td>{team.gamesWon}/{team.gamesPlayed}</td>
                      <td>{team.accuracy}%</td>
                      <td>{team.bestTheme ? `${team.bestTheme.icon} ${t(`themes.${team.bestTheme.id}`)}` : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {recentMatches.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginTop: '16px' }}>{t('leaderboard.recentMatches')}</h2>
            <div className="leaderboard-table-wrap">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>{t('leaderboard.date')}</th>
                    <th colSpan="3">{t('leaderboard.match')}</th>
                  </tr>
                </thead>
                <tbody>
                  {recentMatches.map(m => {
                    const date = new Date(m.date);
                    const dateStr = `${date.getDate()}/${date.getMonth() + 1}`;
                    const winnerName = m.winner === 'blue' ? m.blueName : m.winner === 'red' ? m.redName : '=';
                    return (
                      <tr key={m.id}>
                        <td style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{dateStr}</td>
                        <td style={{ fontWeight: '700', color: 'var(--blue)' }}>{m.blueName}</td>
                        <td style={{ fontWeight: '900', textAlign: 'center' }}>{m.blueScore} - {m.redScore}</td>
                        <td style={{ fontWeight: '700', color: 'var(--red)' }}>{m.redName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

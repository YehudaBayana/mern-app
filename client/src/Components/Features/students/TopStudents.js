import React from 'react';
import './topStudents.css';

const TopStudents = () => {
  return (
    <>
      <article className='leaderboard'>
        <header>
          <h1 className='leaderboard__title'>
            <span className='leaderboard__title--top'>Forbes</span>
            <span className='leaderboard__title--bottom'>Leaderboard</span>
          </h1>
        </header>
        <main className='leaderboard__profiles'>
          <article className='leaderboard__profile'>
            <img
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt='Mark Zuckerberg'
              className='leaderboard__picture'
            />
            <span className='leaderboard__name'>Mark Zuckerberg</span>
            <span className='leaderboard__value'>
              35.7<span>B</span>
            </span>
          </article>
          <article className='leaderboard__profile'>
            <img
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt='Dustin Moskovitz'
              className='leaderboard__picture'
            />
            <span className='leaderboard__name'>Dustin Moskovitz</span>
            <span className='leaderboard__value'>
              9.9<span>B</span>
            </span>
          </article>
          <article className='leaderboard__profile'>
            <img
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt='Elizabeth Holmes'
              className='leaderboard__picture'
            />
            <span className='leaderboard__name'>Elizabeth Holmes</span>
            <span className='leaderboard__value'>
              4.5<span>B</span>
            </span>
          </article>
          <article className='leaderboard__profile'>
            <img
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt='Evan Spiegel'
              className='leaderboard__picture'
            />
            <span className='leaderboard__name'>Evan Spiegel</span>
            <span className='leaderboard__value'>
              2.1<span>B</span>
            </span>
          </article>
        </main>
      </article>
    </>
  );
};

export default TopStudents;

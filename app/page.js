'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const HomePage = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setChannels([
        {
          id: 1,
          title: '채널 1',
          subscribers: '1M 구독자',
          videos: [
            { id: 1, title: '영상 1', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example1', uploadDate: '2023-01-01', views: '1M' },
            { id: 2, title: '영상 2', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example2', uploadDate: '2023-01-02', views: '2M' },
            { id: 3, title: '영상 3', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example3', uploadDate: '2023-01-03', views: '3M' },
          ],
        },
        {
          id: 2,
          title: '채널 2',
          subscribers: '500K 구독자',
          videos: [
            { id: 4, title: '영상 4', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example4', uploadDate: '2023-01-04', views: '4M' },
            { id: 5, title: '영상 5', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example5', uploadDate: '2023-01-05', views: '5M' },
            { id: 6, title: '영상 6', thumbnail: 'https://via.placeholder.com/210x118', url: 'https://www.youtube.com/watch?v=example6', uploadDate: '2023-01-06', views: '6M' },
          ],
        },
        // 추가 채널 데이터...
      ]);
    }, 300);
  }, []);

  const goToChannelDetails = (channelId) => {
    // 페이지 이동 로직
    window.location.href = `/details`;
  };


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>YouToo</h1>
        <p className={styles.subtitle}>당신의 유투버 취향을 추천해드립니다.</p>
      </div>
      <div className={styles.channelList}>
        {loading ? (
          <div className={styles.skeleton}>Loading...</div>
        ) : (
          channels.map(channel => (
            <div key={channel.id} className={styles.channel}>
              <div className={styles.channelHeader}>
                <img src="https://via.placeholder.com/50" alt="프로필" className={styles.profileImage} />
                <h2 className={styles.channelTitle}>{channel.title}</h2>
                <p className={styles.subscribers}>{channel.subscribers}</p>
                <button onClick={() => goToChannelDetails(channel.id)} className={styles.detailsButton}>
                채널 세부정보 보기
                </button>
              </div>
              <div className={styles.videoList}>
                {channel.videos.map(video => (
                  <div key={video.id} className={styles.video}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <img src={video.thumbnail} alt={video.title} className={styles.videoThumbnail} />
                      <div className={styles.videoInfo}>
                        <h3 className={styles.videoTitle}>{video.title}</h3>
                        <p className={styles.videoDetails}>{video.uploadDate} · {video.views} 조회수</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

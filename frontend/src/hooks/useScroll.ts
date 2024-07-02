import { useEffect, useState } from 'react';

const useScroll = () => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const elem = document.getElementById('messages');
    if (!elem) return;
    const listener = () => {
      // 最下部までスクロールしている場合は、自動スクロールする
      if (elem.scrollTop + elem.clientHeight === elem.scrollHeight) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    elem.addEventListener('scroll', listener);

    return () => {
      elem.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollToTop: () => {
      document.getElementById('messages')?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    scrollToBottom: () => {
      if (disabled) return;
      document.getElementById('messages')?.scrollTo({
        top: document.getElementById('messages')?.scrollHeight,
        behavior: 'instant',
      });
    },
  };
};

export default useScroll;

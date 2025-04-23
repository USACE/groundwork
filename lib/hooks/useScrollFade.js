import { useEffect, useRef, useState } from "react";

/**
 * Hook that provides scrollable container ref and fade visibility state.
 * Requires a scrollable container with `overflow: auto`.
 * The fade is shown when the container is scrollable and not at the top or bottom.
 * @example
 * const { scrollRef, showFade } = useScrollFade();
 * 
 * return (
 *   <div ref={scrollRef} className="gw-overflow-auto">
 *     {showFade && <div className="gw-fade" />}
 *     <Content />
 *   </div>
 * );
 * 
 * @returns {{
 *   scrollRef: React.RefObject,
 *   showFade: boolean
 * }}
 */
export default function useScrollFade() {
  const scrollRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const needsFade =
        el.scrollHeight > el.clientHeight &&
        el.scrollTop + el.clientHeight < el.scrollHeight;
      setShowFade(needsFade);
    };

    handleScroll(); // initial state
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollRef, showFade };
}

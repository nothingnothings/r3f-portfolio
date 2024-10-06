import { Html } from '@react-three/drei';

export default function PageButton({
  isNextPageButton,
  onPageNext,
  onPagePrev,
}) {
  return isNextPageButton ? (
    <button onClick={onPageNext}>Next Page</button>
  ) : (
    <button onClick={onPagePrev}>Previous Page</button>
  );
}

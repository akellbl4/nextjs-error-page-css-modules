export default function SSRError() {
  return <div>Error</div>;
}

export function getServerSideProps() {
  throw new Error("server error");
}

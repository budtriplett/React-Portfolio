import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Dang Flabbit!</h1>
      <p>Sorry, portfolios should be much more reliable than this.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
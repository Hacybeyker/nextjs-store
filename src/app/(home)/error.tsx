'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  return (
    <div>
      <h1>Error</h1>
      <p>Ha ocurrido un error</p>
      <p>{props.error.cause ? 'No hay causa' : props.error.message}</p>
      <button onClick={props.reset}>Reintentar</button>
    </div>
  );
}

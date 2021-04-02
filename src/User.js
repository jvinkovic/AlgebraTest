import { useParams } from 'react-router-dom';

export default function User() {
  let { userId } = useParams();
  
  return (
    <div>
      <h2>User is here - id is {userId}</h2>
    </div>
  );
  }
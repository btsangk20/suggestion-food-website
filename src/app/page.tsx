import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="App">
      <Button type="primary">
        <Link href={'/admin'} type="primary">
          Admin Page
        </Link>
      </Button>
    </div>
  );
}

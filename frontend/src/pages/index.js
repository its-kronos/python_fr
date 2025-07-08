import { useEffect, useState } from 'react';

export default function Home() {
  const [test_data,set_data] = useState(
    {"test":"default"}
  );
  
  useEffect(()=>{
    fetch("/api/test").then((res)=>{
      res.json().then((data)=>{
        set_data({
          test:data.test
        })
      })
    })
  },[])

  console.log(test_data.test)
  return (
    <div>
      <p>{test_data.test}</p>
    </div>
  );
}

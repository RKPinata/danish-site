import React,{ useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


function index() {
  const router = useRouter();

  /* useEffect(() => {
    if (router.asPath === '/works') {
      // Redirect to the desired page
      router.push('/');
    }
  }, [router.asPath]); */

  return (

    <Link href='/'>profile</Link>
  )
}

export default index
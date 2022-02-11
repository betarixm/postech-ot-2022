import React from 'react'
import getConfig from 'next/config'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const { publicRuntimeConfig } = getConfig()

  return {
    paths: Object.keys(publicRuntimeConfig.zoomLinks).map((name) => ({
      params: { name: name }
    })),
    fallback: true
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const ZoomLinkRedirect: NextPage = () => {
  const router = useRouter()
  const { publicRuntimeConfig } = getConfig()

  React.useEffect(() => {
    const name = router.query.name
    if (typeof name !== 'string') {
      router.push('/404').then()
      return
    }
    router.push(publicRuntimeConfig.zoomLinks[name]).then()
  }, [])

  return <div />
}

export default ZoomLinkRedirect

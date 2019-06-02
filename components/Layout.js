import Head from 'next/head'

export default ({ children }) => (
  <div className='container'>
    <Head>
      <title>Tidstyv</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content='Tidstyv' />
      <meta property='og:description' content='Tidstyv' />
      <meta property='og:image' content='/static/apple-icon-152x152.png' />
      <meta name='theme-color' content='#000000' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@maccyber' />
      <meta name='twitter:title' content='Tidstyv' />
      <meta name='twitter:description' content='Tidstyv' />
      <meta name='twitter:image' content='https://bigfive-test.com/static/apple-icon.png' />
      <meta name='description' content='Tidstyv' />
      <meta name='keywords' content='Tidstyv' />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: `{ "@context": "http://schema.org/", "@type": "WebSite", "name": "Tidstyv", "url": "https://tidstyv.now.sh" }` }} />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
      <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#2d89ef' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='manifest' href='/static/manifest.json' />
      <link href='https://fonts.googleapis.com/css?family=Quicksand&display=swap' rel='stylesheet' />
      <link rel='preconnect' href='https://fonts.gstatic.com/' crossorigin />
    </Head>
    <div className='header' />
    <div className='main'>
      {children}
    </div>
    <style jsx global>
      {`
        body {
          background-color: #A3DECE;
          font-family: 'Quicksand', sans-serif;
          line-height: 1.9;
          letter-spacing: 1px;
          font-weight: 300;
          text-rendering: optimizeLegibility;
          font-size: 16px;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        .header {
          padding: 5px;
        }
        ::selection {
          background: black;
          color: white;
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 10% 2fr 10%;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-columns: 3% 1fr 3%;
          }
        }
        .main {
          grid-area: content;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
)

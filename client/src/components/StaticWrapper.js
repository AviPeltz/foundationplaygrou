export default function StaticSiteWrapper({ src, width = '100%', height = '700px' }){
    return <iframe src={src} width={width} height={height} style={{ border: 'none' }} />;
  };

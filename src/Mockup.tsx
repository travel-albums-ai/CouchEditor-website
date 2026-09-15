import './App.css';

export default function Mockup({ image, title, brand = true, style } : { image: string, title: string, brand?: boolean, style?: React.CSSProperties }) {

  return  <>
    <div className="hero-mockup" style={{
      maxWidth: '1200px',
      // margin: '0 auto',
      // padding: '0 48px',
      ...style,
    }}>
      <div className="mockup-frame">
        {/* <div className="mockup-titlebar">
          <span className="dot dot-r"></span>
          <span className="dot dot-y"></span>
          <span className="dot dot-g"></span>
          <span className="mockup-titlebar-text">{brand ? `Travel Albums — ${title}` : title}</span>
        </div> */}
        <div className="mockup-content">
          <img src={image} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  </>

}

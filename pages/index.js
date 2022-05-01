import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head"
export default function Home({ images }) {
  const [numero,setNumero] = useState();
  const [hour,setHour] = useState();
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
/*   const videoRef = useRef(); */
  const width = 400;
useEffect(()=>{
  const numero = (Math.floor(Math.random() * 100) !== 0 || Math.floor(Math.random() * 100) !== 1) ? Math.floor(Math.random() * 100) : 10;
  const now = new Date().getHours();
  setNumero(numero);
  setHour(now);
 /*  videoRef && (videoRef.current.currentTime = videoRef.current.currentTime / 1.5); */
},[])

/* const playVideo = async(old) => {
  if(old === 5 && videoRef){   
    videoRef.current.play();
  }else{
    videoRef.current.load();
    videoRef.current.currentTime = videoRef.current.currentTime / 1.5;
  }
} */

return (
    <div className="body">
      <Head>
      <link rel="icon" href="/images/at.png" type="image/png" />
        <title>Postagem igual a do Instagram</title>
      </Head>
      <style jsx>
        {`
          h1{
            text-align:center;
            margin:30px 0;
          }
          .post {
            position: relative;
            border: 1px solid grey;
            height: auto;
            
            max-width: ${width}px;
            
            display: flex;
            flex-direction: column;
            overflow: hidden;
           
            border-radius: 2px;
          }

          .image {
            position: relative;

            max-height: 400px;
            min-height: 400px;
            width: inherit;
            display: flex;
            background-color: black;
          }

          .image img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }

          .desc {
            display: inline-block;
            width: 100%;
            font-size: 12px;
            padding: 5px;
            height: ${show ? 30 : "auto"};
          }

          .desc span {
            font-weight: bolder;
            margin-right: 5px;
            cursor: pointer;
          }

          .desc p {
            display: inline;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${show
              ? 0
              : 1}; /* Definimos quantas linhas queremos */
            display: -webkit-box;
            overflow: hidden;
          }

          .controls {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            z-index: 2;
          }

          .controls span {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: white;
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(0, 0, 0, 0.5);
            font-weight: bolder;
            cursor: pointer;
          }

          .imageTag{
            position:relative;
            width:inherit;
            height:inherit;
          }

          .image > .slider {
            display: flex;
            
            width: calc(100% * ${images.length});
            transform: translateX(-${width * index}px);
            transition: 200ms linear;
          }

          .bullets {
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 20px;
            z-index: 1;
          }
          .bullets > span {
            margin: 0 2px;
            border-radius: 10px;
            background-color: gray;
            transition: 200ms linear;
          }

          .perfil {
            display: flex;
            padding: 10px;
            align-items: center;
          }

          .perfil a {
            display: flex;
            align-items: center;
          }

          

          .perfil span {
            font-weight: bolder;
            font-size: 0.7em;
            cursor: pointer;
          }

          .likes{
            display:flex;
            align-items:center;
            width:100%;
            padding:0 10px;
            padding-top:20px;
          }

          

          .likes .imgs{
            display:flex;
            align-items:center;
            position:relative;
            height:inherit;
          }

          .likes .imgs > div{
              margin: 0 -2px;
          }

          .rounded{
            overflow:hidden;
            border-radius:100%;
          }

          .likes > span{
            font-size:12px;
            margin-left:4px;
          }

          .likes span .highlight{
            font-weight:bold;
            cursor:pointer;
          }

          .time{
            font-size:10px;
            color:gray;
            padding:5px;
          }

          .comments{
            font-size:12px;
            font-weight:lighter;
            padding: 2px 5px;
            color:gray;
          }
          .messages{
            padding:0 5px;
            margin:2px 0;
            font-size:12px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; /* Definimos quantas linhas queremos */
            display: -webkit-box;
            overflow: hidden;
          }

          .messages span{
            font-weight:bold;
            margin-right:2px;
          }

          .Input{
            width:100%;
          
          }

          .Input textarea{
            display:flex;
            resize:none;
            outline:none;
            width:inherit;
            border:none;
            min-height:50px;
            padding:5px;
            font-size:14px;
          }

          .Input textarea::placeholder{
            font-family:--apple-system,Arial;
          }

          video{
            object-fit:contain;
          }

          video::-webkit-media-controls {
            display:none !important;
          }
          
        `}
      </style>
      <h1>Post como a do Instagram</h1>
      <div className="post">
        <div className="perfil">
          <a href="https://www.instagram.com/cleyton_jesus07/">
            <Image style={{borderRadius: 100}} width={30} height={30} src={images[0]} alt="imagem de perfil" />
            <span style={{marginLeft:10}}>cleyton_jesus07</span>
          </a>
        </div>
        <div className="image">
          {images.length > 1 && (
            <>
              <div className="controls">
                <span
                  onClick={() =>
                    setIndex((old) => {
                      /* playVideo(old); */
                      if (old <= 0) {
                        return (old = images.length - 1);
                      }

                      return (old -= 1);
                    })
                  }
                >
                  {"<"}
                </span>
                <span
                  onClick={() =>
                    setIndex((old) => {
                     /*  playVideo(old); */

                      if (old >= images.length - 1) {
                        return 0;
                      }

                      return (old += 1);
                    })
                  }
                >
                  {">"}
                </span>
              </div>
              <div className="bullets">
                {images.map((__, i) => (
                  <span key={i}
                    style={{
                      width: index === i ? 10 : 5,
                      height: 5,
                      opacity: index === i ? 1 : 0.5,
                      backgroundColor: index === i ? "royalblue" : "gray",
                    }}
                  ></span>
                ))}
              </div>
            </>
          )}
          <div className="slider" style={{width:`${width * images.length}px`}}>
            {images.map((img, i) => {

              if(img.indexOf(".png") > -1){
                return (
                  <div key={i} className="imageTag">
                    <Image priority layout="fill" objectFit="contain"  alt={`imagem ${i + 1}`} src={img} />
                  </div>
                )
              }/* else if(img.indexOf(".mp4") > -1){
                return(
                  <div key={i} className="imageTag">
                    <video ref={videoRef} style={{width:"100%",height:"100%"}} alt={`video ${i + 1}`} src={img} controls></video>
                  </div>
                )
              } */

            })}
          </div>
        </div>
        <div className="likes" title={"Apenas ilustrativo"}>
          <div className="imgs">
              {images.map((img,i) => {
                return (i >= 1 && i <= 3) && <div key={i}><Image loading="lazy"  style={{borderRadius:100,zIndex:-i}} layout="fixed"  src={img} width={20} height={20}/></div>
              })}
          </div>
          <span>Curtido por <span className="highlight">cleytonJesus</span> e <span className="highlight">outras 39 pessoas</span></span>
        </div>
        <div className="desc">
          <p>
            <a href="https://www.instagram.com/cleyton_jesus07/">
              <span>cleyton_jesus07</span>
            </a>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rutrum urna quis turpis scelerisque, sit amet iaculis enim
            tincidunt. Phasellus pharetra vel ante eu molestie. Phasellus auctor
            urna quis congue convallis. Aliquam porttitor turpis nec faucibus
            pulvinar. Donec imperdiet dolor eu ipsum ornare faucibus. Aliquam
            pretium dapibus ligula id lacinia. Donec blandit lorem porttitor,
            convallis tortor sit amet, facilisis diam. Pellentesque elementum
            bibendum tortor, vel eleifend nunc hendrerit id. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Pellentesque ullamcorper nunc eget turpis semper posuere. In
            hac habitasse platea dictumst. In eleifend efficitur dui vel
            porttitor. Donec ac risus rhoncus, semper lacus ac, euismod dui.
            Vivamus pulvinar vestibulum risus, eu faucibus risus venenatis sed.
            Ut eget lacinia nibh. Pellentesque mauris magna, pharetra ut
            hendrerit eu, iaculis nec arcu. Sed id magna in nisi facilisis
            accumsan. In luctus gravida scelerisque. Mauris eros massa, aliquam
            sed molestie lacinia, ullamcorper vel elit. Nulla facilisi. Donec
            vitae eleifend enim. Vestibulum laoreet quis nisl eu hendrerit.
            Etiam facilisis nec lorem a venenatis. Donec tempor turpis et nulla
            convallis scelerisque. Integer ornare urna in mauris aliquam, sit
            amet auctor neque lobortis. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Vestibulum sodales
            risus at bibendum rutrum. Curabitur facilisis turpis egestas,
            venenatis dolor in, porttitor orci. Curabitur bibendum eros et dolor
            dignissim faucibus. Fusce sit amet eros dapibus, lobortis purus
            tincidunt, maximus quam. Quisque a vulputate est.
          </p>
          <span
            style={{
              fontSize: "1em",
              fontWeight: "lighter",
              color: "gray",
              cursor: "pointer",
              display: show ? "none" : "inline",
            }}
            onClick={() => setShow(true)}
          >
            ver mais
          </span>
        </div>
        <span className="comments" title={"Link apenas ilustrativo"}>Ver todos os {numero} comentários</span>
        <div className="messages">
            <p><span>randomIlustrator</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rutrum urna quis turpis scelerisque, sit amet iaculis enim</p>
        </div>
        <div className="messages">
            <p><span>InvisibleSketcher</span> Donec imperdiet dolor eu ipsum ornare faucibus. Aliquam
            pretium dapibus ligula id lacinia. Donec blandit lorem porttitor,
            convallis tortor sit amet, facilisis diam. Pellentesque elementum
            bibendum tortor, vel eleifend nunc hendrerit id.</p>
        </div>
        <time className="time">Há {hour} horas </time>
        <div className="Input" title={"Input apenas ilustrativo"}>
            <textarea  autoCorrect={"off"} autoComplete={"off"} type={"text"} placeholder={"Adicione um comentário..."}></textarea>
        </div>
      </div>
      <footer style={{fontSize:10,textAlign:"center",margin:"10px 0"}}>
        Feito com Next
      </footer>
    </div>
  );
}



export const getStaticProps = () => {
  return {
    props: {
      images: [
        "/images/at.png",
        "/images/axieexp.png",
        "/images/esboço.png",
        "/images/Scarlatinha.png",
        "/images/Denise.png",
        /* "/videos/tlou2.mp4" */
      ],
    },
  };
};

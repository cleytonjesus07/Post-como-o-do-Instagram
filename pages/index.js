import { useState } from "react";
import Image from "next/image";
export default function Home({ images }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const width = 400;
  return (
    <div className="body">
      
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
            width: ${width}px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin: 30px 0;
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
            margin-top: 20px;
            width: 100%;
            font-size: 0.7em;

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
        `}
      </style>
      <h1>Post como do Instagram</h1>
      <div className="post">
        <div className="perfil">
          <a href="https://www.instagram.com/cleyton_jesus07/">
            <Image style={{borderRadius: 100}} width={30} height={30} src="/images/at.png" alt="imagem de perfil" />
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
            {images.map((img, i) => (
              <div key={i} className="imageTag">
                <Image priority layout="fill" objectFit="contain"  alt={`imagem ${i + 1}`} src={img} />
              </div>
            ))}
          </div>
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
      ],
    },
  };
};

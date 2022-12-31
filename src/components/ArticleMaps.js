import React, { useState } from 'react';

// CSS
import '../css/article.css';

function ArticleMaps() {

    const [scroller, setScroller] = useState("0");

    const ScroollLeft = () => {
        let element = document.getElementById("mapScroller");
        element.scrollLeft += 50;
        setScroller(element.scrollLeft.toFixed());
    };


    const ScroollRight = () => {
        let element = document.getElementById("mapScroller");
        element.scrollLeft -= 80;
        setScroller(element.scrollLeft.toFixed());
    };


    return (
        <div className='container'>
            <div className='row'>

                <div className=' mb-5 scroller' id="mapScroller">
                    <ul className='col-12 d-flex'>

                        <li>
                            <a data-t="{&quot;n&quot;:&quot;3dcloudLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1 " href="https://www.msn.com/tr-tr/havadurumu/haritalar/bulut/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;cvid=85d35d79149541d9bf9b4f170499fbec&amp;3d=1" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }}><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="3B Bulut Görünümü" src="https://assets.msn.com/weathermapdata/1/static/3d/promote/3d_cloud.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1" /><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="3B Bulut Görünümü" title="3B Bulut Görünümü">3B Bulut Görünümü</span><span className="weatherMapCardSubTitle-E1_1" aria-label="3B Bulut İzleyicisi" title="3B Bulut İzleyicisi">3B Bulut İzleyicisi</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></a>
                        </li>

                        <li >
                            <a data-t="{&quot;n&quot;:&quot;3drainLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1" href="https://www.msn.com/tr-tr/havadurumu/haritalar/yagis/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;3d=1&amp;cvid=67fd1bd528f3417192f0ccdecb3a894a" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }}><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="3B Yağmur Görünümü" src="https://assets.msn.com/weathermapdata/1/static/3d/promote/3d_precip.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1"><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="3B Yağmur Görünümü" title="3B Yağmur Görünümü">3B Yağmur Görünümü</span><span className="weatherMapCardSubTitle-E1_1" aria-label="3B yağmur izleyicisi" title="3B yağmur izleyicisi">3B yağmur izleyicisi</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></div></a>
                        </li>

                        <li>
                            <a data-t="{&quot;n&quot;:&quot;temperatureLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1" href="https://www.msn.com/tr-tr/havadurumu/haritalar/sicaklik/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;cvid=1fa15da50b5744a0edfd717bc30d3fb2" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }} /><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="sıcaklık" src="https://assets.msn.com/weathermapdata/1/static/icons2/temp-new-v1.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1"><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="sıcaklık" title="sıcaklık">sıcaklık</span><span className="weatherMapCardSubTitle-E1_1" aria-label=" Nerenin sıcak ve nerenin soğuk olduğunu görün" title=" Nerenin sıcak ve nerenin soğuk olduğunu görün"> Nerenin sıcak ve nerenin soğuk olduğunu görün</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></div>
                        </li>

                        <li>
                            <a data-t="{&quot;n&quot;:&quot;cloudLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1" href="https://www.msn.com/tr-tr/havadurumu/haritalar/bulut/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;cvid=1fa15da50b5744a0edfd717bc30d3fb2" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }}><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="uydu görünümü" src="https://assets.msn.com/weathermapdata/1/static/icons2/satellite.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1"><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="uydu görünümü" title="uydu görünümü">uydu görünümü</span><span className="weatherMapCardSubTitle-E1_1" aria-label="Bulut örtüsünü izleyin" title="Bulut örtüsünü izleyin">Bulut örtüsünü izleyin</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></div></a>
                        </li>

                        <li>
                            <a data-t="{&quot;n&quot;:&quot;precipitationLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1" href="https://www.msn.com/tr-tr/havadurumu/haritalar/yagis/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;cvid=85d35d79149541d9bf9b4f170499fbec" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }} /><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="yağış" src="https://assets.msn.com/weathermapdata/1/static/icons2/precipitation.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1"><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="yağış" title="yağış">yağış</span><span className="weatherMapCardSubTitle-E1_1" aria-label="Yağmur ve karı izleyin" title="Yağmur ve karı izleyin">Yağmur ve karı izleyin</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></div>
                        </li>

                        <li>
                            <a data-t="{&quot;n&quot;:&quot;windLink&quot;,&quot;t&quot;:11,&quot;a&quot;:&quot;click&quot;,&quot;b&quot;:1}" className="weatherMapCardRoot-E1_1" href="https://www.msn.com/tr-tr/havadurumu/haritalar/ruzgar/in-G%C3%BCng%C3%B6ren,%C4%B0stanbul?loc=eyJsIjoiR8O8bmfDtnJlbiIsInIiOiLEsHN0YW5idWwiLCJjIjoiVMO8cmtpeWUiLCJpIjoiVFIiLCJnIjoidHItdHIiLCJ4IjoiMjguODg4NDY5Njk2MDQ0OTIyIiwieSI6IjQxLjAyMDQzNTMzMzI1MTk1In0%3D&amp;weadegreetype=C&amp;ocid=winp1taskbar&amp;cvid=a40b39cff59e4ad99e5543a398699d8b" target="_blank" rel="noreferrer" style={{ width: "216.293px", height: "149px" }}><img className="weatherMapCardImgBase-E1_1 rounded-2" alt="rüzgar hızı" src="https://assets.msn.com/weathermapdata/1/static/icons2/wind.gif" style={{ width: "216.293px", height: "175px" }} /><div className="weatherMapCardContainer-E1_1"><div className="weatherMapCardContent-E1_1"><div className="weatherMapCardContentDetail-E1_1"><span className="weatherMapCardTitle-E1_1" aria-label="rüzgar hızı" title="rüzgar hızı">rüzgar hızı</span><span className="weatherMapCardSubTitle-E1_1" aria-label="Yönü ve yoğunluğu kontrol edin" title="Yönü ve yoğunluğu kontrol edin">Yönü ve yoğunluğu kontrol edin</span></div><span className="jumpIcon-E1_1" aria-hidden="true" role="presentation"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="9"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#ffffff"></path></svg></span></div></div></a>
                        </li>

                    </ul>

                    <div className='btn btn-warning btnScroolLeft rounded-circle'
                        style={scroller === "0" ? { display: "none" } : null}
                        onClick={() => ScroollRight()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" viewBox="0 0 7 12" fill="none" style={{ transform: "rotate(180deg)" }}><path d="M0.529244 0.862008C0.268898 1.12236 0.268898 1.54447 0.529244 1.80482L4.72452 6.00008L0.529244 10.1953C0.268898 10.4557 0.268898 10.8778 0.529244 11.1381C0.789598 11.3985 1.2117 11.3985 1.47206 11.1381L6.13872 6.47148C6.39905 6.21115 6.39905 5.78901 6.13872 5.52868L1.47206 0.862008C1.2117 0.601661 0.789598 0.601661 0.529244 0.862008Z" fill="#444444"></path></svg>
                    </div>

                    <div className='btn btn-warning btnScroolRight rounded-circle'
                        style={scroller === "300" ? { display: "none" } : null}
                        onClick={() => ScroollLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" viewBox="0 0 7 12" fill="none"><path d="M0.529244 0.862008C0.268898 1.12236 0.268898 1.54447 0.529244 1.80482L4.72452 6.00008L0.529244 10.1953C0.268898 10.4557 0.268898 10.8778 0.529244 11.1381C0.789598 11.3985 1.2117 11.3985 1.47206 11.1381L6.13872 6.47148C6.39905 6.21115 6.39905 5.78901 6.13872 5.52868L1.47206 0.862008C1.2117 0.601661 0.789598 0.601661 0.529244 0.862008Z" fill="#444444"></path></svg>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ArticleMaps;
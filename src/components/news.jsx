import style from '@/components/News.module.css'
import VectorStrelkaPurple from "@/assets/VectorStrelkaPurple";

export default function News() {
  return(
    <div className={style.news} id="news">
      <div>
        <div className={style.news_title}>
          <div className={style.news_title_text}>
            <h1>Новости</h1>
          </div>
          <div  className={style.news_title_all}>
            <h4>все новости</h4>
            <div className={style.circle_purple}><VectorStrelkaPurple/></div>
          </div>
        </div>
      </div>
      <div className={style.news_grid}>
        <div className={style.news_grid_block}>
          <div className="news_grid_block1_img"></div>
          <div className={style.news_grid_block_text}>
            <p className={style.news_grid_block_text_data}>20/05/22</p>
            <h3>Semper eu pulvinar eget integer</h3>
            <p>Pretium duis phasellus netus ac. Nunc nibh<br />nunc integer feugiat et aliquam cras. Amet<br />pharetra montes ipsum gravida tellus tellus.</p>
          </div>
        </div>
        <div className={style.news_grid_block}>
          <div className="news_grid_block2_img"></div>
          <div className={style.news_grid_block_text}>
            <p className={style.news_grid_block_text_data}>20/02/22</p>
            <h3>Vitae id nec nulla sit nunc cursus<br />curabitur tempus vel enim.</h3>
            <p>Cras arcu ac commodo suspendisse commodo<br />ipsum turpis dui. Quis pharetra malesuada<br />eget sit egestas et integer. Suspendisse a.</p>
          </div>
        </div>
        <div className={style.news_grid_block}>
          <div className="news_grid_block3_img"></div>
          <div className={style.news_grid_block_text}>
            <p className={style.news_grid_block_text_data}>30/12/21</p>
            <h3>Integer nisi sagittis in aliquet.<br />Enim eget varius lacinia est a.</h3>
            <p>Lectus tempus felis pretium vitae. Tempor<br />massa vestibulum condimentum cursus diam<br />quam. Mattis facilisi dignissim donec eget vel.</p>
          </div>
        </div>
        <div className={style.news_grid_block}>
          <div className="news_grid_block4_img"></div>
          <div className={style.news_grid_block_text}>
            <p className={style.news_grid_block_text_data}>29/06/21</p>
            <h3>Facilisis vitae proin quis</h3>
            <p>Iaculis diam quam velit sit nunc turpis<br />ultricies elementum. Vitae lacinia tristique<br />rutrum faucibus nulla quis ultricies. Risus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
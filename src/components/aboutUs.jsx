import VectorVideo from "@/assets/VectorVideo"

export default function AboutUs() {
  return(
    <div className="we">
      <div className="we_title">
        <h1>О компании</h1>
      </div>
      <div className="we_we">
        <div className="we_we_text">
          <p>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a<br />sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus<br />elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</p>
          <p>Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.</p>
          <ul>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            </ul>
          <p>Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis<br />nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</p>
          <ul>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
          </ul>
        </div>
        <div className="we_we_right_side">
          <div className="we_we_right_side_video"><div className="vecwork_video"><VectorVideo/></div></div>
          <div className="we_we_right_side_block">
            <h4>Запрос ставки и условий погрузочно-разгрузочных работ</h4>
            <h3>Рассчитайте моментально стоимость полных<br />портовых услуг в порту VISMA</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
import VectorPunkt from "@/assets/VectorPunkt"
import VectorLogoWhite from "@/assets/VectorLogoWhite"
import VectorPhone from "@/assets/VectorPhone"
import VectorMail from "@/assets/VectorMail"

export default function Footer() {
  return(
    <footer>
      <div className="footer_up">
        <div className="footer_up_adress">
          <VectorPunkt/>
          <h4>123456, г. Тавима, ул. Морская, д. 21</h4>
        </div>
        <div className="footer_up_logo">
          <VectorLogoWhite/>
        </div>
        <div className="footer_up_num">
          <VectorPhone/>
          <h4>+7 (123) 456-67-89</h4>
        </div>
        <div className="footer_up_mail">
          <VectorMail/>
          <h4>order@visma.ru</h4>
        </div>
      </div>
      <div className="footer_down">
        <div className="footer_down_list">
          <div>
            <h3>информация о юр. лице</h3>
            <ul>
              <li>ОГРН 11111111111111111</li>
              <li>ИНН 2222222222222</li>
              <li>КПП 3333333333333</li>
              <li>ОКПО 44444444444 ОКВЭД 52.24</li>
              <li>ОКТМО 5555555555555</li>
            </ul>
          </div>
        </div>
        <div className="footer_down_list">
          <div>
            <h3>Закупки</h3>
            <ul>
              <li>Нормативные документы</li>
              <li>Закупки на VISMA Order</li>
              <li>Закупки на VISMA Tender</li>
            </ul>
          </div>
        </div>
        <div className="footer_down_list">
          <div>
            <h3>акционерам</h3>
            <ul>
              <li>Устав VISMA</li>
              <li>Свидетельства госрегистрации</li>
              <li>Список аффилированных лиц</li>
              <li>Информация</li>
              <li>Отчеты</li>
            </ul>
          </div>
        </div>
        <div className="footer_down_list">
          <div>
            <h3>о компании</h3>
            <ul>
              <li>Порт сегодня</li>
              <li>Характеристики порта</li>
              <li>История</li>
              <li>Дипломы и награды</li>
              <li>Транспортная безопасность</li>
              <li>Экология</li>
              <li>Правовая информация</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_down_text">
        <h5>все права защищены АО VISMA</h5>
      </div>
    </footer>
  )
}
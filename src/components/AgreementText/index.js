import React from "react";
import "./styles.scss";

const AgreementText = () => {
  return (
    <div className="agreement-text">
      <h2 className="agreement-title">Общие положения</h2>
      <p className="agreement-info">
        Cookie-файлы (Куки) — небольшой фрагмент данных, отправленный
        веб-сервером и хранимый на цифровом устройстве пользователя -
        компьютере, ноутбуке, планшете, смартфоне и т.п. Веб-клиент (обычно
        веб-браузер) каждый раз при попытке открыть страницу соответствующего
        сайта пересылает этот фрагмент данных веб-серверу в составе
        HTTP-запроса. Cookie-файлы не позволяют идентифицировать личность.{" "}
        <br />
        <br />
        Cookie-файлы используются в целях сбора статистических данных, которые
        позволяют определить, какие разделы сайта привлекают наибольшее внимание
        посетителей, а также в целях улучшения условий пользования сайтом
        посетителями. Пользователь может отказаться от использования
        Cookie-файлов, установив соответствующим образом настройки браузера
        согласно инструкциям, представленным ниже. Блокировка cookie-файлов
        может повлиять на функциональные возможности сайта.
        <br />
        <br /> Продолжая использовать сайт без внесения изменений в настройки
        браузера, пользователь предоставляет согласие ООО «Городской
        супермаркет» на использование файлов cookie.
      </p>
      <h2 className="agreement-title">
        Изменение настроек веб-браузера пользователя
      </h2>

      <p className="agreement-info">
        При наличии желания удалить cookie-файлы, сохраненные на личном
        устройстве, и настроить свой веб-браузер так, чтобы отказаться от
        cookie-файлов, пользователь может сделать это в разделе настроек своего
        браузера.
        <br />
        <br />
        <strong>
          В зависимости от используемого пользователем веб-браузера, для
          отключения cookie-файлов могут быть применены различные способы. Для
          получения более подробной информации, необходимо перейти по следующим
          ссылкам соответственно:
        </strong>
        <br />
        <br />
        • Microsoft Internet Explorer
        https://support.microsoft.com/ru-ru/gp/cookies
        <br />
        • Google Chrome
        https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=ru
        <br />
        • Safari
        https://support.apple.com/kb/PH19214?locale=fr_FR&viewlocale=ru_RU
        <br />
        • Firefox
        https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas
        <br />
        • Opera http://help.opera.com/Windows/10.20/en/cookies.html
        <br />
        <br />
        При полном отключении cookie-файлов некоторые услуги не могут быть
        предоставлены пользователю, доступ ко всем разделам веб-сайта в данном
        случае возможен лишь в режиме ограниченного пользования.
      </p>

      <h2 className="agreement-title">
        Файлы cookie, устанавливаемые на данном сайте
      </h2>
      <p className="agreement-info">
        Кроме вышеперечисленных файлов cookie, могут использоваться
        дополнительные файлы cookie, собственные или сторонних разработчиков, в
        контенте (внешнем), встраиваемом на данный сайт с помощью таких
        технологий, как iFrames, JavaScript и т.д. Разрешая использование файлов
        cookie, Вы также признаете, что в подобном контенте могут использоваться
        свои файлы cookie.
        <br />
        <br />
        <strong>
          Компания Henkel не контролирует и не несет ответственность за файлы
          cookie сторонних разработчиков. Дополнительную информацию Вы можете
          найти на сайте разработчика.
        </strong>
        <br />
        <br />
        Для того чтобы разрешить или запретить установку файлов cookie данным
        сайтом, используйте кнопку ниже.
      </p>
    </div>
  );
};

export default AgreementText;
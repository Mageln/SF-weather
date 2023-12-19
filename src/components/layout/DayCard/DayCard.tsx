import React from "react";
import { IDayInWeek } from "../../../api/types";
import style from "./DayCard.module.scss";

/**
 * Компонент для отображения погоды в конкретный день
 * @param { import ("../../../api/types").IWeather } weather - Погода на день
 */
const DayCard = (weather: IDayInWeek) => {
  const date = new Date(weather.dt * 1000);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const temperature = weather.main.temp !== undefined ? Math.round(weather.main.temp) : "N/A";
  console.log("Temperature:", temperature)
  return (
    <div className={style.DayCard}>
      <div className={style.DayCard__day}>
        {date.getDate()} {date.toLocaleDateString('ru-Ru', { weekday: "long"})}
      </div>
      <div className={style.DayCard__temp}>
      {temperature !== null ? `${temperature}°` : "N/A"}
      {/* {Math.round(weather.main.temp)} */}
      </div>
      <img src={iconUrl} width="50px" height="50px" alt="" />
      <div className={style.DayCard__type}>
        {weather.weather[0].description}
      </div>
    </div>
    
  );
};

export default DayCard;

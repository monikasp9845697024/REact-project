import React from 'react'
import PickMeals  from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMealsImage from "../Assets/delivery-image.png"
// import { LocalFireDepartment } from '@mui/icons-material'

export default function Work() {
    const workInfo =[{
        Image : PickMeals,
        title : "Pick Meals",
        Text : " substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion."

    },
    {
        Image : ChooseMeals,
        title : "Pick Meals",
        Text : " substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion."
        
    },
    {
        Image : DeliveryMealsImage,
        title : "Pick Meals",
        Text : " substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion."
        
    },
]
  return (
    <div className='work-section-wrapper'>

    <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
         substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion."
        
    
        </p>
        <div className='work-section-bottom'>
            {
                workInfo.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.Image} alt=" "/>

                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.Text}</p>
                        </div>
                ))
            }
        </div>
        </div>

    </div>
  );
}

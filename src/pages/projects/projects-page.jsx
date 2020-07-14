import React from 'react';

import '../projects/projects-page.styles.scss'; 

class ProjectsPage extends React.Component { 
  constructor(){
      super();
  } 

    render(){
      return(
        <div className='projects-page'>
             <h2>MY PROJECTS</h2>
            <div className='project'>
                <h3>smp.vin.ua</h3>
                <p>Соціальна та молодіжна політика на Вінниччині</p>
                <a href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/smp.png`)} alt='smp.vin.ua' className='img-district' />
                            <div className='card-text-container'>
                                <p>Офіційний сайт. Соціальна та молодіжна політика на Вінниччині</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>main-page iac</h3>
                <p>Головна сторінка для сукупності сайтів соціальної політики Вінниччини</p>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/main-page.png`)} alt='main-page iac' className='img-district' />
                            <div className='card-text-container'>
                                <p>ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>VN Create</h3>
                <p>Сайт візитка розробки сайтів</p>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/vncreate-1.png`)} alt='VN Create' className='img-district' />
                        <img src={require(`../../img/vncreate-2.png`)} alt='VN Create' className='img-district' />
                            <div className='card-text-container'>
                                <p>Розробка сайту за бажанням клієнта з унікальним дизайном та можливостями. 
                                    Створення сайту на CMS WordPress, Joomla. 
                                    Реєстрація домену та перенесення на хостинг. Доопрацювання вже існуючого сайту.</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>robot-page</h3>
                <p>It's just a string</p>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/robot-friends.png`)} alt='robot-friends' className='img-district' />
                            <div className='card-text-container'>
                                <p>robot</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>todolist</h3>
                <p>It's just a string</p>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/todolist.png`)} alt='todolist' className='img-district' />
                            <div className='card-text-container'>
                                <p>todolist</p>
                            </div>   
                    </div>
                </a>
            </div>
        </div>
      );
    }
};

export default ProjectsPage;
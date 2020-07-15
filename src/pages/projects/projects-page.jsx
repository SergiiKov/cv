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
                <h3>Smp.vin.ua</h3>
                    <div className='card-container'>
                    <a href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
                        <img src={require(`../../img/smp.png`)} alt='smp.vin.ua' className='img-projects' />
                        </a> 
                            <div className='projects-text-container'>
                                <p>Офіційний сайт. Соціальна та молодіжна політика на Вінниччині</p>
                            </div>   
                    </div>
                
            </div>
            <div className='project'>
                <h3>Main-page iac</h3>
                <a href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/main-page.png`)} alt='main-page iac' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>Головна сторінка для сукупності сайтів соціальної політики Вінниччини. 
                                    ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>VN Create</h3>
                <a href='https://github.com/SergiiKov/vncreate' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/vncreate-1.png`)} alt='VN Create' className='img-projects' />
                        <img src={require(`../../img/vncreate-2.png`)} alt='VN Create' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>Сайт візитка. Розробка сайту за бажанням клієнта з унікальним дизайном та можливостями. 
                                    Створення сайту на CMS WordPress, Joomla. 
                                    Реєстрація домену та перенесення на хостинг. Доопрацювання вже існуючого сайту.</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>Robot-page</h3>
                <a href='https://github.com/SergiiKov/cards-friends' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/robot-friends.png`)} alt='robot-friends' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>React app that searches through an API of random robots</p>
                            </div>   
                    </div>
                </a>
            </div>
            <div className='project'>
                <h3>Todo List</h3>
                <a href='https://github.com/SergiiKov/My-ToDo-List' target="_blank" rel="noopener noreferrer">
                    <div className='card-container'>
                        <img src={require(`../../img/todolist.png`)} alt='todolist' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>A simple to-do list application built with React</p>
                            </div>   
                    </div>
                </a>
            </div>
        </div>
      );
    }
};

export default ProjectsPage;
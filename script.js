   
    
    const carsArea = document.getElementById('cars-area');

    fetch('https://stepprojects.ge/api/Car')
      .then(res => res.json())
         .then(cars => renderCars(cars))
       {
      };

  
    function renderCars(cars) {
      carsArea.innerHTML = '';
      cars.forEach(car => {
      
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = car.id;

        card.innerHTML = `
          <img src="${car.imageUrl2 || 'https://via.placeholder.com/220x140'}" alt="">
          <div class="card-body">
            <h5>Model: ${car.model}</h5>
               <h5>Price: $${car.dailyPrice}</h5>
            <h5>seats: ${car.seats}</h5>
            <h5>color: ${car.color}</h5>
          </div>
          <button onclick="removeCar(this)">delete</button>
        `;
 

        carsArea.appendChild(card);

      });
    }


    function removeCar(btn) {
      const card = btn.parentElement;
      const carId = card.dataset.id;
      card.remove();
      
     

      
    }
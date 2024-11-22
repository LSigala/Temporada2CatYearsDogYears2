'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function obtainYears(e: any){
        e.preventDefault();
    
        const data = {
          CatYears: (e.target.catYears.value),
          DogYears: (e.target.dogYears.value)
        }

        const obtainAges:Array<any> = new Array<any>()

        if (data.CatYears > 0 && data.DogYears > 0) {
          if (data.CatYears >= 15) {
            const subtractionCat = data.CatYears - 15
            if (subtractionCat < 9) {
              obtainAges.push([" Cat Years: " + 1])
            }else{
              const subtractionCat2 = subtractionCat - 9;
              const divideResult = Math.round(subtractionCat2 / 4)
              const catYear = 2 + divideResult;
              obtainAges.push([" Cat Years: " + catYear])
            }
          }else{
            obtainAges.push([" Cat Years: " + 0])
          }
          
          if (data.DogYears >= 15) {
            const subtractionDog = data.DogYears - 15
            if (subtractionDog < 9) {
              console.log("subtractionDog",subtractionDog);
              obtainAges.push([" Dog Years: " + 1])
            }else{
              const subtractionDog2 = subtractionDog - 9;
              const divideResult = Math.round(subtractionDog2 / 5)
              const dogYear = 2 + divideResult;
              obtainAges.push([" Dog Years: " + dogYear])
            }
          }else{
            obtainAges.push([" Dog Years: " + 0])
          }
         
          alert(obtainAges)
        }else{
          alert("The values must be greater than 0")
        }
      }

  return (
    <form onSubmit={obtainYears} className="container col-6 text-center mt-4 bg-light">
    <div>
        <div className="d-flex justify-content-center form-group">
            <div className="form-group col-5 px-md-4 mb-3">
                <label>Cat Years</label>
                <input type="text" className="form-control" id="catYears" required aria-describedby="emailHelp " />
            </div>
            <div className="form-group col-5 px-md-4 mb-3">
                <label>Dog Years</label>
                <input type="text" className="form-control" id="dogYears" required aria-describedby="emailHelp " />
            </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">Send Recipe</button>
    </div>
</form>
  );
}
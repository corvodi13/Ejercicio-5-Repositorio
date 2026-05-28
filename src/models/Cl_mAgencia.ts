import Cl_mSuscriptor from "./Cl_mSuscriptor.js";

export default class Cl_mAgencia{

    private suscriptor: Cl_mSuscriptor[] = [];
    private contNoConexion: number = 0;
    private contPlanA: number = 0;
    private contPlanB: number = 0;
    private contPlanC: number = 0;


    agregarSuscriptor(s: Cl_mSuscriptor): void{
        this.suscriptor.push(s);
            switch (s.planes) {
case 'A':
        this.contPlanA++;
        this.contNoConexion++;
        break;
case 'B':
        this.contPlanB++;
        this.contNoConexion++;
        break;
case 'C':
        this.contPlanC++;
        break;

    }

    }
    

    porcentajeNoConexion(): number{
        if(this.suscriptor.length === 0)return 0;
        return (this.contNoConexion/this.suscriptor.length)* 100;
}

    planFavorito(): string{
        if(this.contPlanA >= this.contPlanB && this.contPlanA >= this.contPlanC){
            return 'A';
        } else if (this.contPlanB >= this.contPlanC){
            return 'B';
        } else {
            return 'C';
        }
    }
    
    


}
export class Result {
    Grade:number; 
    Msg:string; 
    ColorGrade:string;

    constructor(grade:number, msg:string, colorGrade:string){
        this.Grade = grade;
        this.Msg = msg;
        this.ColorGrade = colorGrade;
    }
}

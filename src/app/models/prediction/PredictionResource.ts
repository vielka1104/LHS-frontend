export class PredictionResource {
age: number;
blood_pressure: number;
specific_gravity: number;
albumin: number;
sugar: number;
red_blood_cells: boolean;
pus_cell: boolean;
pus_cell_clumps: boolean;
bacteria: boolean;
blood_glucose_random: number;
blood_urea: number;
serum_creatinine: number;
sodium: number;
potassium: number;
hemoglobin: number;
packed_cell_volume: number;
white_blood_cell_count: number;
red_blood_cell_count: number;
hypertension: boolean;
diabetes_mellitus: boolean;
coronary_artery_disease: boolean;
appetite: boolean;
pedal_edema: boolean;
anemia: boolean;

// create constructor
constructor() {
    this.age = 0;
    this.blood_pressure = 0;
    this.specific_gravity = 0;
    this.albumin = 0;
    this.sugar = 0;
    this.red_blood_cells = false;
    this.pus_cell = false;
    this.pus_cell_clumps = false;
    this.bacteria = false;
    this.blood_glucose_random = 0;
    this.blood_urea = 0;
    this.serum_creatinine = 0;
    this.sodium = 0;
    this.potassium = 0;
    this.hemoglobin = 0;
    this.packed_cell_volume = 0;
    this.white_blood_cell_count = 0;
    this.red_blood_cell_count = 0;
    this.hypertension = false;
    this.diabetes_mellitus = false;
    this.coronary_artery_disease = false;
    this.appetite = false;
    this.pedal_edema = false;
    this.anemia = false;
}
}    
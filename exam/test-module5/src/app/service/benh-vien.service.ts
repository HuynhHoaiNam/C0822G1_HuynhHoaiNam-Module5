import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicalRecord} from "../model/medical-record";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

// const URL="http://localhost:8080";
export class BenhVienService {


  constructor(private httpClient: HttpClient) {
  }

  danhSach(): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>("http://localhost:8080/list");
  }

  findById(id: number) {
    return this.httpClient.get<MedicalRecord>("http://localhost:8080/findById/" + id);
  }


  chinhSua(medicalRecord: any) {
    return this.httpClient.put<MedicalRecord>("http://localhost:8080/update/" + medicalRecord.id, medicalRecord);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:8080/" + id);
  }
}

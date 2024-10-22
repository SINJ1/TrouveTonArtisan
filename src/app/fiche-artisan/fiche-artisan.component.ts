import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.scss']
})
export class FicheArtisanComponent implements OnInit {
  artisan: any;
  sent = false;
  messageSent: boolean = false;
  errorMessage: string = '';

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private datasService: DatasService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artisan = this.datasService.artisans.find(a => a.id === id);
  }

  async send() {
    if (this.form.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
      return;
    }

    this.errorMessage = '';
    emailjs.init('U7AKnqbm2_Po6TXgp');
    try {
      let response = await emailjs.send("service_e303xjo", "template_1ixv2mf", {
        name: this.form.value.from_name,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });

      this.messageSent = true; 
      this.form.reset();

      setTimeout(() => {
        this.messageSent = false;
      }, 3000); 
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      this.errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
    }
  }

  // Exemple d'utilisation explicite de FormGroup
  getFormGroup(): FormGroup {
    return this.form;
  }
}
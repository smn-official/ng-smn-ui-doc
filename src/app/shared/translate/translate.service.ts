import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UiCookie } from 'ng-smn-ui';

const loadedLanguages: any[] = [];
const supportedLanguages = ['pt-BR', 'en-US', 'pt', 'en'];

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    change: EventEmitter<any> = new EventEmitter<any>();
    language: string;

    constructor(private http: HttpClient) { }

    init() {
        const localLanguage = supportedLanguages.includes(navigator.language) ? navigator.language : 'en-US';
        const language = UiCookie.get('language') || localLanguage;
        this.setLanguage(language);
    }

    setLanguage(language: string = 'pt-BR') {
        this.language = language;
        this.getLanguageData();
        UiCookie.set('language', this.language);
    }

    getLanguageData() {
        const loadedLanguage = this.getLoadedLanguage();

        if (loadedLanguage) {
            this.change.emit(loadedLanguage.data);
            return;
        }

        this.http
            .get(`assets/i18n/${this.language}.json`)
            .subscribe(data => {
                loadedLanguages.push({
                    name: this.language,
                    data
                });
                this.change.emit(data);
            });
    }

    getLoadedLanguage() {
        return loadedLanguages.filter(language => language.name === this.language)[0];
    }
}

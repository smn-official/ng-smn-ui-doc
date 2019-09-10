import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UiCookie } from 'ng-smn-ui';

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
        UiCookie.set('language', this.language);
        this.change.emit(this.language);
    }

    async getLanguageData(id: string) {
        return new Promise((resolve) => {
            this.http
                .get(`assets/i18n/${this.language}/${id}.json`)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    switch (error.status) {
                        case 404:
                            // TODO: Redirect to translate error page
                        break;
                        default:
                            // TODO: Redirect to unknown error page
                        break;
                    }
                });
        });
    }
}

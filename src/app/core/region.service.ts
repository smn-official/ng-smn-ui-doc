const regions = {
    'pt-br': {
        language: 'pt-br',
        languages: {
            portuguese: 'Português',
            english: 'Inglês'
        },
        menu: {
            index: 'Início',
            components: 'Componentes'
        },
        button: {
            default: 'Padrão',
            withRipple: 'Com ripple',
            iconWithBadge: 'Icon com badge',
            primary: 'Acompanha a cor <b>primary</b> do tema do projeto.',
            accent: 'Acompanha a cor <b>accent</b> do tema do projeto.',
            success: 'É sempre a cor <b>green</b> para identificar sucesso.',
            warning: 'É sempre a cor <b>orange</b> para identificar aviso.',
            error: 'É sempre a cor <b>red</b> para identificar erro.'
        },
        card: {
            simple: 'Simples',
            title: 'Título',
            subtitle: 'Subtítulo',
            content: 'Conteúdo',
            withButtons: 'Com botões',
            withButtonsOnLeft: 'Com botões (alinhados a esquerda)',
            withImage: 'Com imagem',
            imageActor: 'Vampeta',
            imageLink: 'http://vampeta.com.br/vampeta.jpg'
        },
        fab: {
            withLoading: 'Com loading',
            fixedTitle: 'Fixo no canto inferior direito',
            fixedSubtitle: '(o exemplo se encontra fixo no canto inferior direito)'
        },
        input: {
            simple: 'Simples',
            accent: 'Acompanha a cor <b>accent</b> do tema do projeto.'
        }
    },
    'en-us': {
        language: 'en-us',
        languages: {
            portuguese: 'Portuguese',
            english: 'English'
        },
        menu: {
            index: 'Home',
            components: 'Components'
        },
        button: {
            default: 'Default',
            withRipple: 'With ripple',
            iconWithBadge: 'Icon with badge',
            primary: 'Follow the <b>primary</b> color of the project\'s theme.',
            accent: 'Follow the <b>accent</b> color of the project\'s theme.',
            success: 'It\'s always the color <b>green</b> to identify success.',
            warning: 'It\'s always the color <b>orange</b> to identify warning.',
            error: 'It\'s always the color <b>red</b> to identify error.'
        },
        card: {
            simple: 'Simple',
            title: 'Title',
            subtitle: 'Subtitle',
            content: 'Content',
            withButtons: 'With buttons',
            withButtonsOnLeft: 'With buttons (left aligned)',
            withImage: 'With image',
            imageActor: 'Latrel',
            imageLink: 'http://latrel.com/latrel.jpg'
        },
        fab: {
            withLoading: 'With loading',
            fixedTitle: 'Fixed on the bottom right corner',
            fixedSubtitle: '(the example is fixed on the bottom right corner)'
        },
        input: {
            simple: 'Simple',
            accent: 'Follow the <b>accent</b> color of the project\'s theme.'
        }
    }
};

import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class RegionService {
    sharedValue: String;
    change: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    public get() {
        return region(this.sharedValue);
    }

    public set(sharedValue: String) {
        this.sharedValue = sharedValue;

        this.change.emit(region(sharedValue));
    }
}

export function region(language) {
    return regions[language ? language : 'pt-br'];
}

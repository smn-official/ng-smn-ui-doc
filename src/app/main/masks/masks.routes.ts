import { Routes } from '@angular/router';

import { CEP } from './cep/cep.routes';
import { CNPJ } from './cnpj/cnpj.routes';
import { CPF } from './cpf/cpf.routes';
import { CURRENCY } from './currency/currency.routes';
import { CREDIT_CARD } from './credit-card/credit-card.routes';
import { DATE } from './date/date.routes';
import { FLOAT } from './float/float.routes';
import { INTEGER } from './integer/integer.routes';
import { PHONE } from './phone/phone.routes';
import { TIME } from './time/time.routes';

export const MASKS_ROUTES: Routes = [
    ...CEP,
    ...CNPJ,
    ...CPF,
    ...CREDIT_CARD,
    ...DATE,
    ...CURRENCY,
    ...FLOAT,
    ...INTEGER,
    ...PHONE,
    ...TIME
];

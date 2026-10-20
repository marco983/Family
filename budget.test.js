import test from 'node:test';
import assert from 'node:assert/strict';
import {totals,validate} from './budget.js';
test('riepilogo separa entrate e spese',()=>{assert.deepEqual(totals([{type:'income',amount:2000},{type:'expense',amount:120},{type:'expense',amount:30}]),{income:2000,expense:150});});
test('importazione accetta backup e rifiuta importi negativi e categorie sconosciute',()=>{const data={transactions:[{id:'1',type:'expense',amount:25,date:'2026-10-20',description:'Spesa',category:'Spesa'}],budgets:{Spesa:300}};assert.ok(validate(data));assert.equal(validate({...data,transactions:[{...data.transactions[0],amount:-1}]}),false);assert.equal(validate({...data,budgets:{Unknown:10}}),false);assert.equal(validate({}),false);});

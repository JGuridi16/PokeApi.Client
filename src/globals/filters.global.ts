import Vue from 'vue';
import Helpers from '@/core/helpers';

Vue.filter('capitalize', (value: string) => value ? Helpers.CapitalizeString(value) : value);
Vue.filter('empty', (value: string) => value || Helpers.Filters.EmptyText());
Vue.filter('colorType', (value: string) => Helpers.GetColorType(value));
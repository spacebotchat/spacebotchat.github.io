(this.webpackJsonp=this.webpackJsonp||[]).push([[83],{6175:function(i,n,e){"use strict";e.r(n);function t(i,n){if(void 0!==i.one&&1===n)return i.one;var e=n%10,t=n%100;return 1===e&&11!==t?i.singularNominative.replace("{{count}}",n):e>=2&&e<=4&&(t<10||t>20)?i.singularGenitive.replace("{{count}}",n):i.pluralGenitive.replace("{{count}}",n)}function a(i){return function(n,e){return e.addSuffix?e.comparison>0?i.future?t(i.future,n):"за "+t(i.regular,n):i.past?t(i.past,n):t(i.regular,n)+" тому":t(i.regular,n)}}var r={lessThanXSeconds:a({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",
pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(i,n){return n.addSuffix?n.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:a({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:a({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",
pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:a({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:a({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:a({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:a({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",
pluralGenitive:"приблизно за {{count}} тижні"}}),xWeeks:a({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижня",pluralGenitive:"{{count}} тижні"}}),aboutXMonths:a({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяця",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:a({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяця",pluralGenitive:"{{count}} місяців"}}),aboutXYears:a({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:a({regular:{singularNominative:"{{count}} рік",
singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:a({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:a({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})};var u=e(343),o={date:Object(u.a)({formats:{full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(u.a)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(u.a)({formats:{full:"{{date}} 'о' {{time}}",
long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l=e(9264),c=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function s(i){return"'у "+c[i]+" о' p"}var v={lastWeek:function(i,n,e){var t=i.getUTCDay();return Object(l.a)(i,n,e)?s(t):function(i){var n=c[i];switch(i){case 0:case 3:case 5:case 6:return"'у минулу "+n+" о' p";case 1:case 2:case 4:return"'у минулий "+n+" о' p"}}(t)},yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:function(i,n,e){var t=i.getUTCDay();return Object(l.a)(i,n,e)?s(t):function(i){var n=c[i];switch(i){case 0:case 3:case 5:case 6:return"'у наступну "+n+" о' p";case 1:case 2:case 4:return"'у наступний "+n+" о' p"}}(t)},other:"P"};var d=e(240);var g={ordinalNumber:function(i,n){var e=String((n||{}).unit);return i+("date"===e?3===i||23===i?"-є":"-е":"minute"===e||"second"===e||"hour"===e?"-а":"-й")},era:Object(d.a)({values:{narrow:["до н.е.","н.е."],
abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(i){return Number(i)-1}}),month:Object(d.a)({values:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},
defaultFormattingWidth:"wide"}),day:Object(d.a)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",
noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},defaultFormattingWidth:"wide"})},m=e(803),f=e(241),p={code:"uk",formatDistance:function(i,n,e){e=e||{};return r[i](n,e)},formatLong:o,formatRelative:function(i,n,e,t){var a=v[i];return"function"==typeof a?a(n,e,t):a},localize:g,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(-?(е|й|є|а|я))?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:Object(f.a)({matchPatterns:{narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:Object(f.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:Object(f.a)({matchPatterns:{narrow:/^[слбктчвжг]/i,
abbreviated:/^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},defaultParseWidth:"any"}),day:Object(f.a)({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:Object(f.a)({matchPatterns:{
narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=p},9264:function(i,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e(136),a=e(6);function r(i,n,e){Object(a.a)(2,arguments);var r=Object(t.a)(i,e),u=Object(t.a)(n,e);return r.getTime()===u.getTime()}}}]);
//# sourceMappingURL=b20fbbd0bb776901082a.js.map
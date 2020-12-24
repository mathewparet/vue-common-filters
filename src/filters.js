import moment from "moment";
export default {

    options: {
        defaults: {
            moment: {
                current_format: 'YYYY-MM-DDTHH:mm:ssZ',
                format: 'llll',
            },
            trim: {
                max_length: 15,
                lead: '...',
            }
        }
    },

    install(Vue, options) {
        Vue.filter('trim',this.trim);
        Vue.filter('dateFormat',this.dateFormat);
        this.options = options;
    },

    trim(value, max_length, lead) {
        if(!value)
            return;

        max_length = max_length || this.options.defaults.trim.max_length;
        lead = lead || this.options.defaults.trim.lead;
        
        if(value.length <= max_length)
            return value;
    
        return value.substring(0, max_length-lead.length)+lead;
    },
    
    dateFormat(value, format, current_format) {
        current_format = current_format || this.options.defaults.moment.current_format;
        format = format || this.options.defaults.moment.format;

        if(!value)
            return;
        
        return moment(value, current_format).format(format);
    }
}
import moment from "moment";
export default {

    install(Vue, opt) {
        Vue.filter('trim',this.trim);
        Vue.filter('dateFormat',this.dateFormat);
    },

    trim(value, max_length = 15, lead = '...') {
        if(!value)
            return;

        if(value.length <= max_length)
            return value;
    
        return value.substring(0, max_length-lead.length)+lead;
    },
    
    dateFormat(value, format = 'llll', current_format = 'YYYY-MM-DDTHH:mm:ssZ') {

        if(!value)
            return;
        
        return moment(value, current_format).format(format);
    }
}
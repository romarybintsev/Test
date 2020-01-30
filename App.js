// Imports

import { Dimensions } from 'react-native';
import { AppMain } from './components/bottom_navigator';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faAward,faCog, faLayerGroup, faExclamationCircle, faHome, faStar, faTimes, faCheckSquare, faChevronCircleLeft, faCoffee, faCheckCircle, faChevronRight, faCircle, faDotCircle, faLock, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { openDatabase } from 'react-native-sqlite-storage';
import EStyleSheet from 'react-native-extended-stylesheet';


// Variables

var { height, width } = Dimensions.get('window');
EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    
    $rem: Platform.OS === 'ios' ? height < 1024 ? width / 380 : width /720 : width < 760 ? height < 400 ? width/600 : width/450 : width/700,
    $restore_padding: height > 800 ? '15rem' : 0,
    $restore_top_padding: height > 800 ? '10rem' : 0,
});
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
library.add(fab, far, faExclamationCircle, faCog, faLayerGroup, faLock, faStar, faHome, faTimesCircle, fas, faTimes, faChevronCircleLeft, faCheckSquare, faCoffee, faCheckCircle, faChevronRight, faCircle, faDotCircle, faPlayCircle, faAward)

global.premium = 0
global.free_tests = 10
global.reviewed = 0

new Promise((resolve, reject) => {
    db.transaction(function (txn) {
        txn.executeSql(
            'SELECT * FROM config',
            [],
            (txn, results) => {
                resolve(results.rows.item(0))
            });
    }, null, null);
}).then((data) => {
    console.log('version: ', data)
    console.log(height, width)
    global.premium = data.full_version
    global.free_tests = data.free_tests
    global.reviewed = data.review
})


export default AppMain;
import { createContext } from 'react';
import { HOMEPAGECONTENTS } from '../shared/HomePageContents';
import { SOFTWAREPAGECONTENTS } from '../shared/SoftwarePageContents';
import { ABOUTPAGECONTENTS } from '../shared/AboutPageContents';
import { CONTACTPAGECONTENTS } from '../shared/ContactPageContents'
import { ORDERPAGECONTENTS } from '../shared/OrderPageContents';

export const CONTENT = ({
    homepagecontent: HOMEPAGECONTENTS,
    softwarepagecontent: SOFTWAREPAGECONTENTS,
    aboutpagecontent: ABOUTPAGECONTENTS,
    contactuspagecontent: CONTACTPAGECONTENTS,
    orderpagecontent: ORDERPAGECONTENTS
});

export const State = createContext();
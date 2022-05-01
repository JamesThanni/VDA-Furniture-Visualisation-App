import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Asset } from 'expo-asset';

import sofa from './../../assets/models/sofa.obj';
import sofaMtl from './../../assets/models/sofa.mtl';

import barchair from './../../assets/models/barchair.obj';
import barchairMtl from './../../assets/models/barchair.mtl';

import armchair from './../../assets/models/armchair.obj';
import armchairMtl from './../../assets/models/armchair.mtl';

import deskchair from './../../assets/models/deskchair.obj';
import deskchairMtl from './../../assets/models/deskchair.mtl';

const exportedAPI = shouldUseMock ? [sofa, sofaMtl] : [armchair, armchairMtl]
export default exportedAPI
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {viewNarrativeStyle} from './viewNarrativeStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {color} from '../../constants/colors';

const ViewNarrative = () => {
  return (
    <View style={viewNarrativeStyle.viewNarrativeMain}>
      <ChildStackHeader text="View Narrative" textColor={color.black} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={viewNarrativeStyle.summaryMainView}>
        <View style={viewNarrativeStyle.summaryTop}>
          <Text style={viewNarrativeStyle.summaryText}>OPR Summary</Text>
          <View style={viewNarrativeStyle.timeView}>
            <Text style={viewNarrativeStyle.timeText}>12:34am</Text>
            <Text style={viewNarrativeStyle.partitionText}>|</Text>
            <Text style={viewNarrativeStyle.dateText}>12/8/2021</Text>
          </View>
        </View>
        <View style={viewNarrativeStyle.innerView}>
          <Text style={viewNarrativeStyle.innerViewBulletText}>
            Bullet Title
          </Text>
          <Text style={viewNarrativeStyle.innerViewDescriptionText}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </Text>
        </View>
      </View>

      <Text>Bullets</Text>
      <View style={viewNarrativeStyle.bulletPointsView}>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
        <View style={viewNarrativeStyle.bulletSinglePoint}>
          <View style={viewNarrativeStyle.dotStyle} />
          <Text style= {viewNarrativeStyle.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default ViewNarrative;

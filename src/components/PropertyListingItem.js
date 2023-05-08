import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const PropertyListingItem = ({id, title, description, uri}) => {
  return (
    <TouchableOpacity>
      <View style={styles.listingWrapper}>
        <Image
          style={styles.listImage}
          source={{
            uri,
          }}
        />
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyListingItem;

const styles = StyleSheet.create({
  listingWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 12,
    paddingBottom: 16,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12,
  },
  listDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666',
    marginHorizontal: 12,
  },
  listImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
});

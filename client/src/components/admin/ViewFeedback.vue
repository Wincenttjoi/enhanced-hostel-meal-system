<template>
    <v-col>
      <v-data-table
      :headers="headers"
      :items="feedbacks"
      :items-per-page="10"
      :sort-desc="[false]"
      multi-sort
      class="elevation-1"
      ></v-data-table>
    </v-col>
</template>

<script>
import FeedbackService from '@/services/FeedbackService'
var moment = require('moment');
export default {
    name: "ViewFeedback",
    async mounted() {
        this.feedbackData = (await FeedbackService.getFeedback()).data
        for (var i = 0 ; i < this.feedbackData.length; i++) {
          var feedbackObj = this.feedbackData[i];         
          feedbackObj.createdAt = moment(feedbackObj.createdAt).format('MM/DD/YYYY');
          feedbackObj.date = moment(feedbackObj.createdAt).format('MM/DD/YYYY');
          feedbackObj.breakfastOrDinner = feedbackObj.breakfastOrDinner ? "Dinner" : "Breakfast";
          this.feedbacks.push(feedbackObj);
        }
    },
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: true,
            value: 'feedback_id',
          },
          { text: 'Submission date', value: 'createdAt' },
          { text: 'Incident date', value: 'date' },
          { text: 'Timing', value: 'breakfastOrDinner' },
          { text: 'Cuisine Type', value: 'cuisineType' },
          { text: 'Rating', value: 'rating', sortable: false },
          { text: 'Comment', value: 'comment', sortable: false },
        ],
        feedbacks: [
        ],
      }
    }
}
</script>
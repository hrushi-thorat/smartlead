<template>
  <div class="sl--campaigntable__wrapper">
    <div class="sl--campaigntable-row --header">
      <div class="checkbox-column"><checkbox></checkbox></div>
      <div class="campaign-detail-column">Campaign Details</div>
      <div class="campaign-report-column">Report</div>
    </div>
    <div
      class="sl--campaigntable-row --body"
      v-for="campaign in campaigns"
      :key="campaign.id"
    >
      <div class="checkbox-column"><checkbox></checkbox></div>
      <div class="campaign-detail-column">
        <div class="campaign-detail-column_progress-circle">
          <radial-progress
            :front-color="
              campaign.status === 'stopped'
                ? '#CB4B4B'
                : campaign.status === 'paused'
                ? '#DD9553'
                : '#5ECA39'
            "
            back-color="#E5E8F7"
            :back-width="10"
            :front-width="9"
            :value="campaign.completed"
            rounded
          ></radial-progress>
        </div>
        <div class="campaign-detail-column_details">
          <div class="campaign-detail-column_details--title-wrapper">
            <span>{{ campaign.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.57959 8.45363L14.6846 1.34863M14.6846 1.34863H10.8346M14.6846 1.34863V5.12863"
                stroke="#8284AD"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.7 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V9.335"
                stroke="#8284AD"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="campaign-detail-column_details-status-wrapper">
            <span class="status-indicator"></span>
            <span
              >{{
                campaign.status === "stopped"
                  ? "Stopped on"
                  : campaign.status === "paused"
                  ? "Paused on"
                  : campaign.status === "draft"
                  ? "Drafted on"
                  : "Sent on"
              }}
              15 Apr 2023</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="10"
              viewBox="0 0 2 10"
              fill="none"
            >
              <path opacity="0.7" d="M1 0L1 10" stroke="#9698A3" />
            </svg>
            <span>{{ campaign.seq }} Sequences</span>
          </div>
        </div>
      </div>
      <div class="campaign-report-column">
        <report-column-entity
          :value="report.value"
          :title="report.title"
          :valuePercent="report.per"
          :valueColor="report.color"
          v-for="report in campaign.reports"
          :key="report.value + report.title"
          :status="campaign.status"
        ></report-column-entity>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/UI/Checkbox.vue";
import RadialProgress from "@/components/UI/RadialProgress.vue";
import ReportColumnEntity from "./ReportColumnEntity.vue";
export default {
  components: {
    Checkbox,
    RadialProgress,
    ReportColumnEntity,
  },
  data() {
    return {
      campaigns: [
        {
          id: 1,
          title: "SW Zero Personalisation 1",
          status: "sent",
          seq: "3",
          completed: 30,
          reports: [
            {
              value: "520",
              title: "sent",
            },
            {
              value: "39",
              title: "Clicked",
              per: "19.6%",
              color: "#EEB728",
            },
            {
              value: "202",
              title: "Opened",
              per: "32.6%",
              color: "#BF51C1",
            },
            {
              value: "4",
              title: "Replied",
              per: "32.6%",
              color: "#51C1C1",
            },
            {
              value: "0",
              title: "Positive Reply",
              per: "0.0%",
              color: "#2CDB28",
            },
          ],
        },
        {
          id: 2,
          title: "SW Zero Personalisation 1",
          status: "draft",
          seq: "4",
          completed: 0,
          reports: [
            {
              value: "0",
              color: "#999BA8",
              title: "sent",
            },
            {
              value: "0",
              title: "Clicked",
              per: "0%",
              color: "#999BA8",
            },
            {
              value: "0",
              title: "Opened",
              per: "0%",
              color: "#999BA8",
            },
            {
              value: "0",
              title: "Replied",
              per: "0%",
              color: "#999BA8",
            },
            {
              value: "0",
              title: "Positive Reply",
              per: "0.0%",
              color: "#999BA8",
            },
          ],
        },
        {
          id: 3,
          title: "SW Zero Personalisation 1",
          status: "stopped",
          seq: "3",
          completed: 30,
          reports: [
            {
              value: "540",
              title: "sent",
            },
            {
              value: "41",
              title: "Clicked",
              per: "19.6%",
              color: "#EEB728",
            },
            {
              value: "204",
              title: "Opened",
              per: "32.6%",
              color: "#BF51C1",
            },
            {
              value: "6",
              title: "Replied",
              per: "32.6%",
              color: "#51C1C1",
            },
            {
              value: "3",
              title: "Positive Reply",
              per: "0.0%",
              color: "#2CDB28",
            },
          ],
        },
        {
          id: 4,
          title: "SW Zero Personalisation 1",
          status: "paused",
          seq: "3",
          completed: 30,
          reports: [
            {
              value: "550",
              title: "sent",
            },
            {
              value: "43",
              title: "Clicked",
              per: "19.6%",
              color: "#EEB728",
            },
            {
              value: "205",
              title: "Opened",
              per: "32.6%",
              color: "#BF51C1",
            },
            {
              value: "8",
              title: "Replied",
              per: "32.6%",
              color: "#51C1C1",
            },
            {
              value: "6",
              title: "Positive Reply",
              per: "0.0%",
              color: "#2CDB28",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sl--campaigntable__wrapper {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  .sl--campaigntable-row {
    display: flex;
    align-items: center;
    .checkbox-column {
      width: 3%;
      display: flex;
      align-items: center;
    }
    .campaign-detail-column {
      width: 37%;
    }
    .campaign-report-column {
      width: 60%;
    }
    &.--header {
      background: #e9ebf9;
      padding: 16px 12px;
      color: #686b8a;
      font-size: 16px;
      font-weight: 700;
    }
    &.--body {
      background: #fff;
      box-shadow: 0px 2px 10px 0px rgba(20, 20, 20, 0.05);
      padding: 20px 12px;
      .campaign-detail-column {
        display: flex;
        gap: 20px;
        align-items: center;
        .campaign-detail-column_details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          .campaign-detail-column_details--title-wrapper {
            display: flex;
            gap: 12px;
            align-items: center;
            color: #6e58f1;
            font-size: 15px;
            font-size: 15px;
          }
        }
      }
      .campaign-report-column {
        display: flex;
        align-items: center;
        gap: 46px;
      }
    }
  }
}
.campaign-detail-column_details-status-wrapper {
  display: flex;
  gap: 8px;
  color: #282b42;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  .status-indicator {
    width: 6px;
    height: 6px;
    background: #5eca39;
    border-radius: 50%;
  }
}
</style>
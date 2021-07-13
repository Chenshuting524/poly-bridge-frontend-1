<template>
  <Page class="transactions">
    <img class="top-decoration" src="@/assets/svg/poly-bg.svg" />
    <div class="bottom-decoration-wrapper">
      <img class="bottom-decoration" src="@/assets/svg/poly-bg.svg" />
    </div>
    <div class="content">
      <div class="content-inner">
        <div class="title">{{ $t('transactions.index.title') }}</div>

        <div class="table-wrapper">
          <ElTable :data="tokenInfo.TokenBasics" class="table">
            <ElTableColumn width="20" />
            <ElTableColumn #default="{ row }" :label="$t('tokens.token')">
              <div class="chain">
                <img class="chain-icon" :src="row.Meta ? row.Meta : defaultLogo" />
                <span>{{ row.Name }}</span>
              </div>
            </ElTableColumn>
            <ElTableColumn #default="{ row }" :label="$t('tokens.price')">
              <div class="chain">
                <span>{{ $formatNumber(row.Price) }}</span>
              </div>
            </ElTableColumn>
            <ElTableColumn #default="{ row }" :label="$t('tokens.info')" min-width="150">
              <div class="chain" v-for="(item, index) in row.Tokens" :key="index">
                <span>{{ $formatEnum(item.ChainId, { type: 'chainName' }) }}</span>
                <span>
                  <CLink
                    class="hash"
                    :href="
                      $format(getChain(item.ChainId).explorerUrlToken, {
                        tokenHash: item.Hash,
                      })
                    "
                    target="_blank"
                    :disabled="!item.Hash"
                  >
                    {{
                      $t('transactions.index.hash', {
                        hash: $formatLongText(item.Hash || 'N/A'),
                      })
                    }}
                  </CLink>
                </span>
              </div>
            </ElTableColumn>
            <ElTableColumn #default="{ row }" :label="$t('tokens.volume')" min-width="80">
              <div class="chain">
                <span>{{ $formatNumber(row.TotalVolume) }}</span>
              </div>
            </ElTableColumn>
            <ElTableColumn #default="{ row }" :label="$t('tokens.count')" min-width="80">
              <div class="chain">
                <span>{{ $formatNumber(row.TotalCount) }}</span>
              </div>
            </ElTableColumn>
            <ElTableColumn #default="{ row }" :label="$t('tokens.amount')" min-width="80">
              <div class="chain">
                <span>{{ $formatNumber(row.TotalAmount) }}</span>
              </div>
            </ElTableColumn>
            <ElTableColumn width="20" />
          </ElTable>
          <div class="pagination">
            <CButton @click="page--" :disabled="page <= 1 || tokenInfo.TotalPage == null">
              <img src="@/assets/svg/arrow-left.svg" />
            </CButton>
            <span>{{
              $t('transactions.index.pagination', {
                page: page,
                pageCount: tokenInfo.TotalPage || 1,
              })
            }}</span>
            <CButton @click="page++" :disabled="!(page < tokenInfo.TotalPage)">
              <img src="@/assets/svg/arrow-right.svg" />
            </CButton>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import _ from 'lodash';
import Page from '@/views/common/Page';

export default {
  name: 'TokenInfo',
  components: {
    Page,
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      defaultLogo: require('../../assets/svg/unknown.svg'),
    };
  },
  computed: {
    tokenInfo() {
      debugger;
      console.log(this.$store.getters.tokenBasicsInfo);
      return this.$store.getters.tokenBasicsInfo;
    },
  },
  watch: {
    page() {
      this.tokenInfo = {};
      this.getInfo();
    },
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getChain(chainId) {
      return this.$store.getters.getChain(chainId);
    },
    async getInfo() {
      await this.$store.dispatch('getTokenBasicsInfo', {
        pageNo: this.page - 1,
        pageSize: this.pageSize,
        order: 'total_count',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .transactions {
    min-width: 1440px;
  }
}

.top-decoration {
  position: absolute;
  top: 0;
  z-index: -1;
}

.bottom-decoration-wrapper {
  position: absolute;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  z-index: -1;
}

.bottom-decoration {
  transform: translate3d(60px, 60px, 0) scale(1.2);
}

.content {
  display: flex;
  flex: 1;
  margin: auto;
  @include child-margin-v(24px);
}

.content-inner {
  @media screen and (min-width: 900px) {
    width: 1160px;
  }
  margin: 40px auto 20px;
  @include child-margin-v(24px);
}

.title {
  font-size: 20px;
}

.table-wrapper {
  padding: 12px 0 24px;
  border-radius: 20px;
  background: #182233;
  @include child-margin-v(24px);
}

.chain {
  display: flex;
  align-items: center;
  @include child-margin-h(6px);
}

.chain-icon {
  width: 24px;
}

.hash {
  color: #2fd8ca;
  font-size: 14px;
}

.view-details {
  color: #2fd8ca;
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  @include child-margin-h(6px);
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .transactions {
    max-width: 100vw;
  }
  .top-decoration {
    display: none;
  }
  .bottom-decoration-wrapper {
    display: none;
  }
  .table {
    max-width: 90vw;
  }
  .content {
    margin-top: 40px;
    .title {
      display: none;
      // margin-top: 20px;
      // text-align: center;
    }
    .content-inner {
      margin-top: 0;
    }
  }
}
</style>

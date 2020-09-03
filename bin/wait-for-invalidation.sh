#!/bin/bash

set -e

DISTRIBUTION_ID=$1
INVALIDATION_ID=$2
INVALIDATION_STATUS="N/A"

while : ; do
  INVALIDATION_STATUS=$(
    aws cloudfront get-invalidation  \
      --distribution-id "${DISTRIBUTION_ID}" \
      --id "${INVALIDATION_ID}" \
      --query 'Invalidation.Status' \
      --output text
  )

  [[ "${INVALIDATION_STATUS}" != "Completed" ]] || break;

  RANDOM_TIME_TO_WAIT=$((3 + RANDOM % 7)); 

  echo "Invalidation still in progress."
  echo "Waiting for ${RANDOM_TIME_TO_WAIT} second."

  sleep ${RANDOM_TIME_TO_WAIT}
done

echo "Invalidation completed."
